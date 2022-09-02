import { Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';

import useModal from '@/hooks/useModal';
import ImageUpload from './ImageUpload';
import { XMarkIcon } from '@heroicons/react/24/solid';

type Props = {
  onImageUpload: (imageUrl: string) => void;
  isOpen: boolean;
  closeModal: () => void;
};

function Modal({ onImageUpload, isOpen, closeModal }: Props) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <XMarkIcon
                  onClick={closeModal}
                  className="absolute top-5 right-5 h-8 w-8 cursor-pointer"
                />
                <Dialog.Title
                  as="h3"
                  className="mb-4 text-lg font-medium leading-6 text-gray-900"
                >
                  Upload Event Image
                </Dialog.Title>
                <ImageUpload onImageUpload={onImageUpload} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;
