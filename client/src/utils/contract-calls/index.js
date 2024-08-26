import { prepareContractCall } from "thirdweb";
import { useSendTransaction } from "thirdweb/react";


export function donateToCampaign(_id) {
  const { mutate: sendTransaction } = useSendTransaction();
  const transaction = prepareContractCall({
    contract,
    method: "function donateToCampaign(uint256 _id) payable",
    params: [_id],
  });
  sendTransaction(transaction);
}
