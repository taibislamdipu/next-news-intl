import Modal from "@/components/Modal";
import ModalContent from "@/components/ModalContent";

const NewsModal = ({ params }) => {
  const { id } = params;
  return (
    <Modal>
      <ModalContent id={id} />
    </Modal>
  );
};

export default NewsModal;
