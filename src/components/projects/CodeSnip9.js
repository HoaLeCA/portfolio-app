import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeSnip9 = (props) => {
  const [copy, setCopy] = useState(false);
  const codeString = `
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Noteform from '../components/Noteform';
import Spinner from '../components/Spinner';
import NoteItem from '../components/NoteItem';
import { getNotes, reset } from '../features/notes/noteSlice';

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { notes, isLoading } = useSelector((state) => state.notes);
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
    dispatch(getNotes());
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name} </h1>
        <p className='fs-5'>Note Dashboard</p>
      </section>
      <div className='content'>
        <section className=''>
          {notes.length > 0 ? (
            <div>
              {notes.map((note) => (
                <NoteItem key={note._id} note={note} />
              ))}
            </div>
          ) : (
            <h3 className='fs-5'>You have not set any notes yet.</h3>
          )}
        </section>
      </div>

      <Noteform />
    </>
  );
}
export default Dashboard;

  `;
  const des = props.des;
  return (
    <div
      className='w-3/4 p-3 items-center xl:px-1 h-auto xl:py-5 mx-auto rounded-md shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000 '
      style={{
        paddingTop: '1rem',
        paddingBottom: '1rem',
        lineHeight: 1.2,
      }}
    >
      <div className='w-full h-[50%] overflow-hidden rounded-md items-center flex-auto'>
        <div className='flex justify-between text-white text-xs items-center overflow-hidden'>
          <p className='text-sm mb-2'>Example code</p>
          {copy ? (
            <button className='py-1 inline-flex items-center gap-1 mb-2'>
              <span className='text-base '>
                <ion-icon name='checkmark-sharp'></ion-icon>
              </span>
              Copied!
            </button>
          ) : (
            <button
              className='py-1 inline-flex items-center gap-1  mb-2'
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 3000);
              }}
            >
              <span className='text-base '>
                <ion-icon name='clipboard-outline'></ion-icon>
              </span>
              Copy code
            </button>
          )}
        </div>
        <SyntaxHighlighter
          customStyle={{ padding: '20px' }}
          wrapLongLines={true}
          language='javascript'
          style={atomOneDark}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
      <div className='w-full mt-5 flex flex-col  gap-6'>
        <div className=''>
          <p className='text-sm tracking-wide mt-0 hover:text-gray-100 duration-300 text-center'>
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CodeSnip9;
