import Button from '../UI/buttons/button';

export default function Card() {
  return (
    <>
      <div className='p-4 mb-8 border rounded'>
        <div className='w-full pb-[56.25%] relative mb-6'>
          <img src="../assets/images/1.jpeg" alt="" className='w-full h-full object-cover object-center absolute inset-0'/>
        </div>
        <h2 className='mb-5 text-center font-semibold text-xl'>What is Lorem Ipsum?</h2>
        <p className='text-justify mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <Button/>
      </div>
    </>
  );
}
