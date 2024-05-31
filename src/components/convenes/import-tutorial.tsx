'use client';

import * as React from 'react';
import { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { Import } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import createImportScript from '@/lib/createImportScript';
import { useConveneHistory } from '@/hooks/useConveneHistory';

interface Props {
  handleBack: () => void;
}

export function ImportTutorial({ handleBack }: Props) {
  const { saveConveneHistoryUrl } = useConveneHistory();

  const [gamePath, setGamePath] = useState('');
  const [conveneHistoryUrl, setConveneHistoryUrl] = useState('');

  const script = createImportScript(gamePath);
  const codeBlockRef = useRef<HTMLTextAreaElement | null>(null);
  // matches valid Windows paths
  const gamePathRegex =
    /^[a-zA-Z]:\\(?:[^\\/:*?"<>|\r\n]+\\)*[^\\/:*?"<>|\r\n]*$/;
  const isValidGamePath = gamePathRegex.test(gamePath);
  // matches valid Convene History API URLs
  const conveneHistoryUrlRegex =
    /^https:\/\/aki-gm-resources-oversea\.aki-game\.net\/aki\/gacha\/index\.html\#\/record\?(?=.*\bplayer_id=\w+\b)(?=.*\blang=\w+\b)(?=.*\brecord_id=\w+\b)(?=.*\bsvr_id=\w+\b).*$/;
  const isValidConveneHistoryUrl =
    conveneHistoryUrl !== '' && conveneHistoryUrlRegex.test(conveneHistoryUrl);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidGamePath) {
      toast.error('Invalid Game Path', {});
    } else if (!isValidConveneHistoryUrl) {
      toast.error('Invalid Convene History URL', {});
    }

    saveConveneHistoryUrl(conveneHistoryUrl);

    toast.success('Successfully imported Convene History URL!');
    handleBack();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <ol className="relative border-s ms-3 mt-4">
          <li className="mb-10 ms-8">
            <span className="absolute -start-4 bg-accent rounded-full w-8 h-8 p-3 flex justify-center items-center">
              <p className="text-sm">1</p>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Copy Your Installation Directory
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Find the folder that contains &quot;Wuthering Waves.exe&quot; and
              a &quot;Client&quot; folder.
            </p>
            <div className="grid w-full items-center gap-1.5">
              <Input
                className={cn({
                  'border-red-500 focus-visible:ring-0 focus-visible:outline-none':
                    gamePath && !isValidGamePath,
                })}
                id="wuwa-install-path"
                placeholder="Your installation directory"
                required
                onBlur={(e) => setGamePath(e.target.value)}
              />
            </div>
          </li>
          <li className="mb-10 ms-8">
            <span className="absolute -start-4 bg-accent rounded-full w-8 h-8 p-3 flex justify-center items-center">
              <p className="text-sm">2</p>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Launch Wuthering Waves on PC and Open Your In-game Convene History
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Afterwards, open Windows PowerShell, and then paste the following
              script.
              <br />
            </p>
            <div className="flex w-full items-center space-x-2">
              <Textarea
                ref={codeBlockRef}
                disabled
                cols={3}
                className="font-mono focus:outline-none focus-visible:ring-none disabled:cursor-text bg-muted"
                value={
                  isValidGamePath
                    ? script
                    : 'Input a valid installation directory first!'
                }
              />
            </div>
          </li>
          <li className="mb-10 ms-8">
            <span className="absolute -start-4 bg-accent rounded-full w-8 h-8 p-3 flex justify-center items-center">
              <p className="text-sm">3</p>
            </span>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Paste the URL Here
            </h3>
            <div className="grid w-full items-center gap-1.5">
              <Input
                className={cn({
                  'border-red-500 focus-visible:ring-0 focus-visible:outline-none':
                    conveneHistoryUrl && !isValidConveneHistoryUrl,
                })}
                id="wuwa-convene-url"
                placeholder="Your Convene History URL"
                required
                onChange={(e) => {
                  setConveneHistoryUrl(e.target.value);
                }}
              />
            </div>
          </li>
        </ol>
        <div className="flex w-full">
          <Button size="lg" type="submit" className="w-full sm:w-auto ms-auto">
            <Import className="mr-2 h-4 w-4" /> Import History
          </Button>
        </div>
      </form>
    </>
  );
}
