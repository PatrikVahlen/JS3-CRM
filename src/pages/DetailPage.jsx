import React from 'react'
import { useParams } from 'react-router-dom'
import Detail from '../components/Detail'

export default function DetailPage() {
    const params = useParams()
    return (
        <div>
            <Detail id={params.id} />
        </div>
    )
}