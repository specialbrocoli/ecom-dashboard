'use client';

import * as React from 'react';

import { Card } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { ScrollArea } from './ui/scroll-area';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Button } from './ui/button';
import { Calendar1 } from 'lucide-react';
import { format } from 'date-fns';

export default function TodoList() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [open, setOpen] = React.useState(false);
  return (
    <div className=''>
      <h1 className='text-lg font-medium mb-6'>Todo List</h1>
      {/* CALENDAR */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className='w-full'>
            <Calendar1 />
            {date ? format(date, 'PPP') : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='p-0 w-auto'>
          <Calendar
            mode='single'
            selected={date}
            onSelect={(date)=>{
              setDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>

      {/* LIST */}
      <ScrollArea className='max-h-[400px] mt-4 overflow-y-auto'>
        <div className='flex flex-col gap-4'>
          <Card className='p-4'>
            <div className='flex items-center gap-4'>
              <Checkbox id='item-1' checked />
              <label
                htmlFor='item-1'
                className='text-sm text-muted-foreground '
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className='p-4'>
            <div className='flex items-center gap-4'>
              <Checkbox id='item-1' />
              <label
                htmlFor='item-1'
                className='text-sm text-muted-foreground '
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className='p-4'>
            <div className='flex items-center gap-4'>
              <Checkbox id='item-1' />
              <label
                htmlFor='item-1'
                className='text-sm text-muted-foreground '
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className='p-4'>
            <div className='flex items-center gap-4'>
              <Checkbox id='item-1' />
              <label
                htmlFor='item-1'
                className='text-sm text-muted-foreground '
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className='p-4'>
            <div className='flex items-center gap-4'>
              <Checkbox id='item-1' />
              <label
                htmlFor='item-1'
                className='text-sm text-muted-foreground '
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className='p-4'>
            <div className='flex items-center gap-4'>
              <Checkbox id='item-1' />
              <label
                htmlFor='item-1'
                className='text-sm text-muted-foreground '
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
}
