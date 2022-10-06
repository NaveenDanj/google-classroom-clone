import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import ClassroomHeader from '../components/Classroom/ClassroomHeader'

const Classes: NextPage = () => {
    return (
        <div>

            <Head>
                <title>Classroom</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <ClassroomHeader />
            </div>

        </div>
    )
}

export default Classes