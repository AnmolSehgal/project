import Modal from "../../modalComponent";
import AddExpenseContent from "./addExpenseContent";

export interface AddExpenseModalState {
  display: boolean;
  handleDisplay: () => void;
  friendUID: string;
  friendName: string;
  isVerified: boolean;
}

const AddExpenseModal = ({
  display,
  handleDisplay,
  friendName,
  friendUID,
  isVerified,
}: AddExpenseModalState) => {
  return (
    <Modal display={display}>
      <AddExpenseContent
        handleDisplay={handleDisplay}
        friendName={friendName}
        friendUID={friendUID}
        isVerified={isVerified}
      />
    </Modal>
  );
};

export default AddExpenseModal;
