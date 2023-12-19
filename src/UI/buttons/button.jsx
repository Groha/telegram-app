import { Link } from "react-router-dom";

export default function Button() {
  return (
    <>
      <Link to="/1" className='flex justify-center items-center max-w-[200px] px-5 py-2 rounded bg-slate-600 text-white mx-auto uppercase font-medium'>more info</Link>
    </>
  );
}