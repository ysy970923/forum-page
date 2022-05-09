import { MsgExecuteContract } from "@terra-money/terra.js";
import { createLCDClient } from "@terra-money/wallet-provider";

export const GOV_CONTRACT_ADDRESS =
  "terra17d74nf7d6nlspr8klnt763jjz6uved5fsuhqdr";

export const NFT_CONTRACT_ADDRESS =
  "terra1c929yvrhcng9l93lska29hajewlvml4frdpyre";

export const createHookMsg = (msg) =>
  Buffer.from(JSON.stringify(msg)).toString("base64");

export async function getID(connectedWallet) {
  if (!connectedWallet) return;
  const terra = new createLCDClient({ network: connectedWallet.network });

  const queryMsg = {
    tokens: {
      owner: connectedWallet.terraAddress,
    },
  };
  let result = await terra.wasm.contractQuery(NFT_CONTRACT_ADDRESS, {
    ...queryMsg,
  });
  return result.tokens[0];
}

export async function getBalance(connectedWallet, id) {
  if (!connectedWallet) return;
  const terra = new createLCDClient({ network: connectedWallet.network });
  const queryMsg = {
    member: {
      member_id: id,
    },
  };
  let result = await terra.wasm.contractQuery(GOV_CONTRACT_ADDRESS, {
    ...queryMsg,
  });
  return result;
}

export async function getMembersInfo(connectedWallet) {
  if (!connectedWallet) return;
  const terra = new createLCDClient({ network: connectedWallet.network });
  const queryMsg = {
    all_tokens: {},
  };
  let result = await terra.wasm.contractQuery(NFT_CONTRACT_ADDRESS, {
    ...queryMsg,
  });
  let members = [];
  for (let i in result.tokens) {
    let id = result.tokens[i];
    let member = await getBalance(connectedWallet, id);
    console.log(member);
    member["id"] = id;
    members.push(member);
  }
  return members;
}

export async function getPollInfo(connectedWallet, poll_id) {
  if (!connectedWallet) return;
  const terra = new createLCDClient({ network: connectedWallet.network });
  const queryMsg = {
    poll: {
      poll_id: parseInt(poll_id),
    },
  };
  let poll = await terra.wasm.contractQuery(GOV_CONTRACT_ADDRESS, {
    ...queryMsg,
  });
  let blockinfo = await terra.tendermint.blockInfo(poll.end_height - 100);
  poll.end_time = new Date(blockinfo.block.header.time);
  poll.end_time.setSeconds(poll.end_time.getSeconds() + 6.3 * 100);
  poll.end_time = poll.end_time.toString();

  poll.yes_ratio = poll.yes_votes / poll.total_share_at_start_poll;
  poll.no_ratio = poll.no_votes / poll.total_share_at_start_poll;
  return poll;
}

export async function executeDAO(connectedWallet, msg) {
  if (!connectedWallet) return;
  const terra = new createLCDClient({ network: connectedWallet.network });

  if (connectedWallet.network.chainID.startsWith("columbus")) {
    alert(`Please only execute this example on Testnet`);
    return;
  }

  let id = await getID(connectedWallet);

  const executeMsg = {
    execute_d_a_o: {
      token_id: id,
      msg: msg,
    },
  };

  executeMsg.execute_d_a_o.msg = createHookMsg(executeMsg.execute_d_a_o.msg);

  const execute = new MsgExecuteContract(
    connectedWallet.terraAddress, // sender
    NFT_CONTRACT_ADDRESS, // contract account address
    { ...executeMsg } // handle msg
  );

  const executeTx = await connectedWallet.sign({
    msgs: [execute],
  });

  return await terra.tx.broadcastSync(executeTx.result);
}
