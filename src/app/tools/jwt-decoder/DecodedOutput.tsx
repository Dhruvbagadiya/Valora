
"use client"

import React, { forwardRef, useEffect, useState } from 'react';

interface DecodedOutputProps {
    header: Record<string, any>;
    payload: Record<string, any>;
    setHeader: (newHeader: Record<string, any>) => void;
    setPayload: (newPayload: Record<string, any>) => void;
    algorithm: string;
    currentKey: any; // Adjust type based on your keys structure
}

const DecodedOutput = forwardRef<HTMLDivElement, DecodedOutputProps>(
    ({ header, payload, setHeader, setPayload }, ref) => {
        const [headerText, setHeaderText] = useState('');
        const [payloadText, setPayloadText] = useState('');
        const [headerError, setHeaderError] = useState('');
        const [payloadError, setPayloadError] = useState('');

        useEffect(() => {
            setHeaderText(JSON.stringify(header, null, 2));
            setPayloadText(JSON.stringify(payload, null, 2));
        }, [header, payload]);

        const handleHeaderChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            try {
                const newHeader = JSON.parse(e.target.value);
                setHeader(newHeader);
                setHeaderError(''); // Clear error message on valid input
            } catch (error) {
                setHeaderError('Invalid header JSON');
                console.error('Invalid header JSON', error);
            }
        };

        const handlePayloadChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            try {
                const newPayload = JSON.parse(e.target.value);
                setPayload(newPayload);
                setPayloadError(''); // Clear error message on valid input
            } catch (error) {
                setPayloadError('Invalid payload JSON');
                console.error('Invalid payload JSON', error);
            }
        };

        return (
            <div ref={ref} className="space-y-4">
                <h3 className="text-lg font-bold">Header:</h3>
                <textarea
                    value={headerText}
                    onChange={handleHeaderChange}
                    className="w-full h-[200px] p-2 border rounded bg-white"
                    aria-label="Decoded JWT Header"
                />
                {headerError && <p className="text-red-500">{headerError}</p>}

                <h3 className="text-lg font-bold">Payload:</h3>
                <textarea
                    value={payloadText}
                    onChange={handlePayloadChange}
                    className="w-full h-[200px] p-2 border rounded bg-white"
                    aria-label="Decoded JWT Payload"
                />
                {payloadError && <p className="text-red-500">{payloadError}</p>}
                {/* You can add more output sections or components here if needed */}
            </div>
        );
    }
);

export default DecodedOutput;
