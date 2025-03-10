import * as React from 'react';
import Entry from './Entry';

export default function Form() {
  return (
    <div className="w-full ml-18 mr-18 mt-20 mb-30">
      <button className=" bg-gray-100 rounded-t-lg border-2 border-gray-300/50 font-semibold text-maroon hover:underline 
    ` active:bg-gray-300">
        Bone Entries
      </button>
      <button className=" bg-gray-100 rounded-t-lg border-2 border-gray-300/50 font-semibold text-maroon hover:underline
      active:bg-gray-300">
        Individual Entries
      </button>
      <button className=" bg-gray-100 rounded-t-lg border-2 border-gray-300/50 font-semibold text-maroon hover:underline
            active:bg-gray-300">
        Dental Entries
      </button>
      <div className='bg-white border-1 border-gray-300/50'>

        <Entry
          title="Femur"
          caption="A bone in the body"
        />
        <Entry
          title="Femur"
          caption="A bone in the body"
        />
        <Entry
          title="Femur"
          caption="A bone in the body"
        />
        <Entry
          title="Femur"
          caption="A bone in the body"
        />
        <Entry
          title="Femur"
          caption="A bone in the body"
        />
        <Entry
          title="Femur"
          caption="A bone in the body"
        />
        <Entry
          title="Femur"
          caption="A bone in the body"
        />
        <Entry
          title="Femur"
          caption="A bone in the body"
        />
        <Entry
          title="Femur"
          caption="A bone in the body"
        />
        <Entry
          title="Femur"
          caption="A bone in the body"
        />




      </div>
    </div>

  );
}


/*
import * as React from 'react';

export default function Form(){
    return (
        <div className='bg-white px-160 py-90 rounded-xl border-1 border-gray-300/50'>
            
        </div>
    )
}
    */