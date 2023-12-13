import React from 'react'
import NewTeacherModal from '@/components/NewTeacherModal'
import { getAllTeachers } from '@/actions/teachersActions'
import Empty from '@/components/Empty'
// import TeachersList from '@/components/TeachersList'
import SectionWrapper from '@/components/SectionWrapper'
import SectionTitle from '@/components/SectionTitle'
import TeacherCard from '@/components/Teachers/TeacherCard'
import TeachersList from '@/components/Teachers/TeachersList'

export const metadata = {
    title: 'Professeurs - SchoolX',
}

export default async function page() {
    const teachers = await getAllTeachers()

    return (
        <div className='w-full relative h-full flex flex-col px-3 md:px-8'>

            <SectionWrapper>
                <SectionTitle title='Liste des professeurs' />
                {/* {teachers && teachers.length > 0 ?
                <TeachersList teachers={teachers} />
                : <Empty
                    text="Aucun (e) professeur n'a été enregistré. Cliquez sur le bouton ci-dessous pour débuter l'enregistrement."
                    link='teachers'
                />
            } */}
                {teachers && teachers.length > 0 ?
                    <TeachersList teachers={teachers} />
                    : <Empty
                        text="Aucun (e) professeur n'a été enregistré. Cliquez sur le bouton ci-dessous pour débuter l'enregistrement."
                        link='teachers'
                    />
                }
                <NewTeacherModal />
            </SectionWrapper>
        </div>
    )
}
