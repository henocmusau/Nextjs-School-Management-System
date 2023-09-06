'use client'

import React, { useState } from 'react'
import ModalContent from './ModalContent'
import useModal from '@/hooks/useModal'
import Action from './Action'
import { AiOutlineAudit, AiOutlineBank, AiOutlineUser } from 'react-icons/ai'

export default function ModalWrapper() {
  const [isOpen, openModal, closeModal] = useModal()

  return (
    <>
      <button onClick={openModal} className='rounded-full shadow-xl absolute bottom-20 right-20 p-6 h-16 w-16 bg-blue-700 hover:bg-blue-500 duration-300 text-white flex items-center justify-center text-2xl'>+</button>
      <ModalContent isOpen={isOpen} closeModal={closeModal}>
        <Action closeModal={closeModal} title='Nouveau paiement' link='/payment?new=1' icon={<AiOutlineBank />}>
          Enregistrer un nouveau paiement
        </Action>
        <Action closeModal={closeModal} title='Nouvel(le) élève' link='/students?new=1' icon={<AiOutlineUser />}>
          Enregistrer un(e) nouvel(le) élève
        </Action>
        <Action closeModal={closeModal} title='Nouveau professeur' link='/teachers?new=1' icon={<AiOutlineAudit />}>
          Enregistrer un nouveau professeur
        </Action>
      </ModalContent>
    </>
  )
}
