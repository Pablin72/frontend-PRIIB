'use client';
import { useEffect } from 'react';
import {executeRemoteCommand} from '../repos/inforRetrieval';

export default function Home() {
  useEffect(() => {
    executeRemoteCommand('juanito', 25);
  });

  return (
    <>Main Page</>
  );
}
