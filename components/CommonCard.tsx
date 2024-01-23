'use client';
import React from 'react'
import { Transition, Dialog } from '@headlessui/react';
import {Fragment} from 'react'
import Image from 'next/image';
import { Checkbox, CustomFlowbiteTheme, Label, Radio, RangeSlider } from 'flowbite-react';
import { Accordion } from 'flowbite-react';

import { Dropdown } from 'flowbite-react';


interface CarDetailsProps{
    isOpen: boolean;
    closeModal: ()=>void;
    
}
const customTheme: CustomFlowbiteTheme = {
    button: {
      color: {
        primary: 'bg-red-500 hover:bg-red-600',
      },
    },
  };

const CommonCard = ({isOpen, closeModal}:CarDetailsProps) => {
  return (
    <>
    <Transition
            appear show={isOpen}
            as={Fragment}
        >
            <Dialog 
            as="div" 
            className={"relative z-10"} 
            onClose={closeModal}>
                <Transition.Child
                    as={Fragment} 
                    enter='ease-out duration-400'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                > 
                    <div
                      className='fixed inset-0 bg-black bg-opacity-25'  
                    />
                    
                </Transition.Child>
                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center '>
                    <Transition.Child
                    as={Fragment} 
                    enter='ease-out duration-400'
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'
                >
                    
                    <Dialog.Panel 
                        className="relative w-full max-w-lg  min-h-[100vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col gap-5 p-8 ml-[80%]"
                    >
                        <div className='flex-wrap flex'>
                            <h1 className="text-2xl font-bold ">
                                Filter
                            </h1>
                        <button
                            type='button'
                            className='absolute top-2 right-2 z-10 w-fit pt-2 mt-5 bg-primary-blue-100 rounded-full'
                            
                            onClick={closeModal}
                        >
                         <Image
        src="/close.svg"  // replace with the actual path to your image
        alt="Close Button"
        width={24}  // set the width of the image
        height={24}  // set the height of the image
    />

                        </button>
                        </div>
                        
                        

                        <div className='mt-3 flex flex-wrap gap-4'>
                        
                            {/* <div className='flex justify-between gap-5 w-full text-right '>
                                <h4 className='text-gray capitalize text-[#290F6A] text-lg font-semibold'>Services</h4>
                           
                                <p className='text-black-100 font-semibold '>
                                    <Image
                                    src="/minus.svg"  // replace with the actual path to your image
                                    alt="Close Button"
                                    width={24}  // set the width of the image
                                    height={24}  // set the height of the image
                                />
                                </p>
                            </div> */}
                            <Accordion collapseAll>
                            <Accordion.Panel className='flex justify-between gap-5 w-full text-right '>
                                
                            <Accordion.Title className="mb-4 text-[#290F6A] text-lg font-semibold">Services</Accordion.Title>
                            <Accordion.Content>
                                    <fieldset className="flex max-w-md flex-col gap-4">
                                        
                                        <div className="flex items-center gap-2">
                                            <Checkbox id="accept" name="countries" value="USA" defaultChecked className=" hover:bg-[#8C3AFF] rounded-sm focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600" />
                                            <Label htmlFor="united-state">Virtual tours</Label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Checkbox id="accept" name="countries" value="Germany" className=" hover:bg-[#8C3AFF] rounded-sm focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600"/>
                                            <Label htmlFor="germany">Video tours</Label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Checkbox id="accept" name="countries" value="Spain" className=" hover:bg-[#8C3AFF] rounded-sm focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600"/>
                                            <Label htmlFor="spain">Free EPC</Label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Checkbox id="accept" name="countries" value="United Kingdom" className=" hover:bg-[#8C3AFF] rounded-sm focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600"/>
                                            <Label htmlFor="uk">Premium listings</Label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Checkbox id="accept" name="countries" value="United Kingdom" className=" hover:bg-[#8C3AFF] rounded-sm focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600" />
                                            <Label htmlFor="uk">Social media advertising</Label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Checkbox id="accept" name="countries" value="United Kingdom"className=" hover:bg-[#8C3AFF] rounded-sm focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600" />
                                            <Label htmlFor="uk">Rightmove listing</Label>
                                        </div>

                                        <Dropdown label="View more" dismissOnClick={false} inline color="primary" >
                                <Dropdown.Item>
                                    <fieldset className="flex max-w-md flex-col gap-4">
                                        <div className="flex items-center gap-2">
                                            <Checkbox id="accept" name="countries" value="United Kingdom" className=" hover:bg-[#8C3AFF] rounded-sm focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600" />
                                            <Label htmlFor="uk">more options</Label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Checkbox id="accept" name="countries" value="United Kingdom"className=" hover:bg-[#8C3AFF] rounded-sm  focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600" />
                                            <Label htmlFor="uk">more options</Label>
                                        </div>
                                    </fieldset>
                                </Dropdown.Item>
      
    </Dropdown>
                                        
                                    </fieldset>
                                
                           
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>
                           
                        <Accordion collapseAll>
                            <Accordion.Panel className='flex justify-between gap-5 w-full text-right '>
                                
                            <Accordion.Title className="mb-4 text-[#290F6A] text-lg font-semibold">Sale time</Accordion.Title>
                            <Accordion.Content>
                                    <fieldset className="flex max-w-md flex-col gap-4">
                                        
                                        <div className="flex items-center gap-2">
                                            <Checkbox id="accept" name="countries" value="USA" defaultChecked className=" hover:bg-[#8C3AFF] rounded-sm focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600" />
                                            <Label htmlFor="united-state">Virtual tours</Label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Checkbox id="accept" name="countries" value="Germany" className=" hover:bg-[#8C3AFF] rounded-sm focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600"/>
                                            <Label htmlFor="germany">Video tours</Label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Checkbox id="accept" name="countries" value="Spain" className=" hover:bg-[#8C3AFF] rounded-sm focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600"/>
                                            <Label htmlFor="spain">Free EPC</Label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Checkbox id="accept" name="countries" value="United Kingdom" className=" hover:bg-[#8C3AFF] rounded-sm focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600"/>
                                            <Label htmlFor="uk">Premium listings</Label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Checkbox id="accept" name="countries" value="United Kingdom" className=" hover:bg-[#8C3AFF] rounded-sm focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600" />
                                            <Label htmlFor="uk">Social media advertising</Label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Checkbox id="accept" name="countries" value="United Kingdom"className=" hover:bg-[#8C3AFF] rounded-sm focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600" />
                                            <Label htmlFor="uk">Rightmove listing</Label>
                                        </div>

                                        <Dropdown label="View more" dismissOnClick={false} inline color="primary" >
                                <Dropdown.Item>
                                    <fieldset className="flex max-w-md flex-col gap-4">
                                        <div className="flex items-center gap-2">
                                            <Checkbox id="accept" name="countries" value="United Kingdom" className=" hover:bg-[#8C3AFF] rounded-sm focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600" />
                                            <Label htmlFor="uk">more options</Label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Checkbox id="accept" name="countries" value="United Kingdom"className=" hover:bg-[#8C3AFF] rounded-sm  focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600" />
                                            <Label htmlFor="uk">more options</Label>
                                        </div>
                                    </fieldset>
                                </Dropdown.Item>
      
    </Dropdown>
                                        
                                    </fieldset>
                                
                           
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>



                        <Accordion collapseAll>
                            <Accordion.Panel className='flex justify-between gap-5 w-full text-right '>
                                
                            <Accordion.Title className="mb-4 text-[#290F6A] text-lg font-semibold">Sale history</Accordion.Title>
                            <Accordion.Content>
                                    <fieldset className="flex max-w-md flex-col gap-4">
                                        
                                        <div className="flex items-center gap-2">
                                            <Checkbox id="accept" name="countries" value="USA" defaultChecked className=" hover:bg-[#8C3AFF] rounded-sm focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600" />
                                            <Label htmlFor="united-state">Virtual tours</Label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Checkbox id="accept" name="countries" value="Germany" className=" hover:bg-[#8C3AFF] rounded-sm focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600"/>
                                            <Label htmlFor="germany">Video tours</Label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Checkbox id="accept" name="countries" value="Spain" className=" hover:bg-[#8C3AFF] rounded-sm focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600"/>
                                            <Label htmlFor="spain">Free EPC</Label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Checkbox id="accept" name="countries" value="United Kingdom" className=" hover:bg-[#8C3AFF] rounded-sm focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600"/>
                                            <Label htmlFor="uk">Premium listings</Label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Checkbox id="accept" name="countries" value="United Kingdom" className=" hover:bg-[#8C3AFF] rounded-sm focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600" />
                                            <Label htmlFor="uk">Social media advertising</Label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Checkbox id="accept" name="countries" value="United Kingdom"className=" hover:bg-[#8C3AFF] rounded-sm focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600" />
                                            <Label htmlFor="uk">Rightmove listing</Label>
                                        </div>

                                        <Dropdown label="View more" dismissOnClick={false} inline color="primary" >
                                <Dropdown.Item>
                                    <fieldset className="flex max-w-md flex-col gap-4">
                                        <div className="flex items-center gap-2">
                                            <Checkbox id="accept" name="countries" value="United Kingdom" className=" hover:bg-[#8C3AFF] rounded-sm focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600" />
                                            <Label htmlFor="uk">more options</Label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Checkbox id="accept" name="countries" value="United Kingdom"className=" hover:bg-[#8C3AFF] rounded-sm  focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600" />
                                            <Label htmlFor="uk">more options</Label>
                                        </div>
                                    </fieldset>
                                </Dropdown.Item>
      
    </Dropdown>
                                        
                                    </fieldset>
                                
                           
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>
                         
                        <div className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-1 block ">
          <Label htmlFor="default-range" value="Price Range" />
        </div>
        <RangeSlider id="default-range" />
      </div> </div>

                           
      <div className="flex max-w-md flex-col gap-4" id="checkbox">
      <div className="flex items-center gap-2">
        <Checkbox id="accept" defaultChecked />
        <Label htmlFor="accept" className="flex">
          1 sold
           
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="promotion" />
        <Label htmlFor="promotion">5 sold</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="age" />
        <Label htmlFor="age">10 sold</Label>
      </div>
      <div className="flex gap-2">
        <div className="flex h-5 items-center">
          <Checkbox id="shipping" />
        </div>
        <div className="flex flex-col">
          <Label htmlFor="shipping">20 sold</Label>
          <div className="text-gray-500 dark:text-gray-300">
           
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="disabled"  />
        <Label htmlFor="50" >
         50 sold
        </Label>
      </div>
    </div>


                        </div>
                       
                        
                        
                    </Dialog.Panel>
                </Transition.Child>
                    </div>
                </div>
            </Dialog>

        </Transition>
    </>
  )
}

export default CommonCard