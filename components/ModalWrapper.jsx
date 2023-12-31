'use client'

import React, { useState } from 'react'
import ModalContent from './ModalContent'
import useModal from '@/hooks/useModal'
import Action from './Action'
import { AiOutlineAudit, AiOutlineBank, AiOutlineUser, AiOutlineUsergroupAdd, AiOutlineBook } from 'react-icons/ai'

export default function ModalWrapper() {
  const [isOpen, openModal, closeModal] = useModal()

  return (
    <>
      <button onClick={openModal} className='rounded-full shadow-xl z-50 absolute right-4 bottom-20 md:right-20 p-6 h-16 w-16 bg-blue-700 hover:bg-blue-500 duration-300 text-white flex items-center justify-center text-2xl'>+</button>
      <ModalContent isOpen={isOpen} closeModal={closeModal} id='modal' >
        <Action closeModal={closeModal} title='Nouveau paiement' link='/payments?new=1' icon={<AiOutlineBank />}>
          Enregistrer un nouveau paiement
        </Action>
        <Action closeModal={closeModal} title='Nouvel(le) élève' link='/students?new=1' icon={<AiOutlineUser />}>
          Enregistrer un(e) nouvel(le) élève
        </Action>
        <Action closeModal={closeModal} title='Nouveau professeur' link='/teachers?new=1' icon={<AiOutlineAudit />}>
          Enregistrer un nouveau professeur
        </Action>
        <Action closeModal={closeModal} title='Nouvelle classe' link='/classes?new=1' icon={<AiOutlineUsergroupAdd />}>
          Créer une nouvelle classe
        </Action>
        <Action closeModal={closeModal} title='Nouveau cours' link='/courses?new=1' icon={<AiOutlineBook />}>
          Créer un nouveau cours
        </Action>
      </ModalContent>
    </>
  )
}
