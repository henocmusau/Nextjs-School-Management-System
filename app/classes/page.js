import React from 'react'
import { getAllClasses } from '@/actions/classActions'
import NewClassModal from '@/components/NewClassModal'
import ClassesList from '@/components/ClassesList'
import Empty from '@/components/Empty'

export const metadata = {
    title: 'Classes - SchoolX',
}

export default async function page() {
    const classes = await getAllClasses()

    return (
        <>
            <div className='w-full h-full flex flex-col px-8'>

                {classes && classes.length > 0 ?
                    <ClassesList classes={JSON.parse(JSON.stringify(classes))} />
                    : <Empty
                        text="Aucune classe n'a été enregistré. Cliquez sur le bouton ci-dessous pour débuter l'enregistrement."
                        link='classes'
                    />
                }
                <NewClassModal />
            </div>
        </>
    )
}
