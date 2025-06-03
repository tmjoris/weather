import Image from 'next/image';

const Spinner = () => {
    return (
        <>
            <Image className='w-[200px] m-auto block' src="/spinner.gif" alt="loading..."/>
        </>
    );
};

export default Spinner;