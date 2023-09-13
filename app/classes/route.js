import { NextResponse } from 'next/server'
import { classModel } from '@/models/relations'

export async function GET(request) {
    try {
        const classes = await classModel.findAll()
        return NextResponse.json({ classes })
    } catch (e) {
        console.log('Erreur classes')
        return NextResponse.json({ message: 'Une erreur est survenue !', error: e })
    }
}