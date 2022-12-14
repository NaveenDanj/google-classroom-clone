import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import ClassroomHeader from '../components/Classroom/ClassroomHeader'
import { SettingsBody } from '../components/Settings/SettingsBody'

const Settings:NextPage = () => {
    return (
        <div>

            <Head>
                <title>Classroom</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <ClassroomHeader />
                <SettingsBody />
            </div>
        </div>
    )
}

export default Settings