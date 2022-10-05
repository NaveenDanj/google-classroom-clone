import Image from "next/image";


interface Prop {
    path : string;
    title: string;
    subtitle: string
}

const EmptyList = (prop:Prop) => {

    const {path , title , subtitle} = prop;

    return (
        <div className=' h-36 mt-10 flex justify-center items-center '>

            <div className=' justify-center'>

                <div className='w-full flex flex-row justify-center'>
                    <Image
                        width={120}
                        height={120}
                        alt='empty'
                        src={path}
                        className='mx-auto'
                    />
                </div>


                <h2 className='font-bold text-md text-center '>{title}</h2>
                <div className=' w-64 flex justify-center mx-auto'>
                    <h2 className='text-sm text-center w-30'>{subtitle}</h2>
                </div>


            </div>
        </div>
    );
}

export default EmptyList;