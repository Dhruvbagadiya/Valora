"use client";

import React, { useState, useEffect, useRef } from 'react';
import { SignJWT, importJWK, JWK } from 'jose';
import TokenInput from './TokenInput';
import DecodedOutput from './DecodedOutput';
import keys from './utils/algorithmKeys';
import defaultTokens from './utils/defaultTokens';

// Define the TokenData type
type TokenData = {
  token: string;
  algorithm: string;
  header: {
    alg: string;
    typ: string;
  };
  payload: {
    sub: string;
    name: string;
    iat: number;
  };
};

// Define type for the 'keys' object
type AlgorithmKeys = {
  [key: string]: {
    secret?: string;
    jwk?: JWK;
  };
};

// Define keys type based on what you have in your project
const algorithmKeys: AlgorithmKeys = keys as AlgorithmKeys;

// List of supported algorithms
const algorithms = [
  'HS256', 'HS384', 'HS512',
  'RS256', 'RS384', 'RS512',
  'ES256', 'ES384', 'ES512',
  'PS256', 'PS384', 'PS512',
];

const JWTDecoder: React.FC = () => {
  const [jwtData, setJwtData] = useState<TokenData>({
    token: defaultTokens['HS256'],
    algorithm: 'HS256',
    header: { alg: 'HS256', typ: 'JWT' },
    payload: {
      sub: "1234567890",
      name: "John Doe",
      iat: 1516239022,
    },
  });

  const [decodedHeader, setDecodedHeader] = useState<Record<string, any>>({});
  const [decodedPayload, setDecodedPayload] = useState<Record<string, any>>({});
  const [error, setError] = useState<string>('');
  const skipEncodingRef = useRef<boolean>(false);
  const skipDecodingRef = useRef<boolean>(false);
  const manualTokenRef = useRef<boolean>(false);

  useEffect(() => {
    decodeJWT();
  }, [jwtData.token]);

  useEffect(() => {
    if (skipEncodingRef.current) {
      skipEncodingRef.current = false;
      return;
    }
    if (!manualTokenRef.current) {
      encodeJWT();
    }
  }, [jwtData.header, jwtData.payload]);

  useEffect(() => {
    setJwtData(prevData => ({
      ...prevData,
      token: defaultTokens[prevData.algorithm],
    }));
  }, [jwtData.algorithm]);

  useEffect(() => {
    const newAlgorithm = jwtData.header?.alg;
    if (newAlgorithm && algorithms.includes(newAlgorithm) && newAlgorithm !== jwtData.algorithm) {
      setJwtData(prevData => ({
        ...prevData,
        algorithm: newAlgorithm,
        header: { ...prevData.header, alg: newAlgorithm },
      }));
    }
  }, [jwtData.header]);

  const decodeBase64Url = (base64Url: string): string => {
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return atob(base64);
  };

  const decodeJWT = () => {
    try {
      if (!jwtData.token) {
        setDecodedHeader({});
        setDecodedPayload({});
        return;
      }

      const [headerBase64Url, payloadBase64Url] = jwtData.token.split('.');

      if (!headerBase64Url || !payloadBase64Url) {
        throw new Error('Invalid token');
      }

      const headerJson = decodeBase64Url(headerBase64Url);
      const payloadJson = decodeBase64Url(payloadBase64Url);

      const header = JSON.parse(headerJson);
      const payload = JSON.parse(payloadJson);

      setDecodedHeader(header);
      setDecodedPayload(payload);
    } catch (error) {
      console.error('Invalid token', error);
      setError('Invalid token');
      setDecodedHeader({});
      setDecodedPayload({});
    }
  };

  const encodeJWT = async () => {
    try {
      let key: CryptoKey | Uint8Array;
      const algorithmKey = algorithmKeys[jwtData.algorithm];

      if (jwtData.algorithm.startsWith('HS')) {
        // HMAC algorithms (HS256, HS384, HS512)
        if (!algorithmKey.secret) {
          throw new Error(`Missing secret for algorithm ${jwtData.algorithm}`);
        }
        key = new TextEncoder().encode(algorithmKey.secret);
      } else {
        // RSA, EC, and PS algorithms
        if (!algorithmKey.jwk) {
          throw new Error(`Missing JWK for algorithm ${jwtData.algorithm}`);
        }
        key = await importJWK(algorithmKey.jwk, jwtData.algorithm);
      }

      const token = await new SignJWT(jwtData.payload)
        .setProtectedHeader(jwtData.header)
        .sign(key);

      skipDecodingRef.current = true;
      setJwtData(prevData => ({
        ...prevData,
        token: token,
      }));
      setError('');
    } catch (error) {
      console.error('Error encoding JWT:', error);
      setError('Error encoding JWT');
    }
  };

  const handleAlgorithmChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    manualTokenRef.current = false;
    setJwtData(prevData => ({
      ...prevData,
      algorithm: e.target.value,
      header: { ...prevData.header, alg: e.target.value },
    }));
  };

  const handleTokenChange = (newToken: string) => {
    manualTokenRef.current = true;
    setJwtData(prevData => ({
      ...prevData,
      token: newToken,
    }));
  };

  const handleHeaderChange = (newHeader: Record<string, any>) => {
    setJwtData(prevData => ({
      ...prevData,
      header: newHeader,
    } as TokenData));
  };

  const handlePayloadChange = (newPayload: Record<string, any>) => {
    setJwtData(prevData => ({
      ...prevData,
      payload: newPayload,
    } as TokenData));
  };

  return (
    <div className="p-4 space-y-4 mx-auto max-w-5xl" id="jwtdecoder">
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold m-8 text-center underline text-gray-800">Debugger</h1>
      </div>
      <div className="flex justify-center mb-4">
        <label htmlFor="algorithm" className="text-lg font-semibold m-2">Algorithm:</label>
        <select
          id="algorithm"
          value={jwtData.algorithm}
          onChange={handleAlgorithmChange}
          className="p-2 border rounded focus:ring focus:ring-blue-500"
          style={{ minWidth: '100px' }}
        >
          {algorithms.map((algo) => (
            <option key={algo} value={algo}>{algo}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="flex-1 p-4 border rounded-lg bg-gray-50">
          <h2 className="text-xl mb-2 font-bold">Encoded</h2>
          {error && (
            <div className="bg-red-500 text-white p-2 mb-2 rounded">
              {error}
            </div>
          )}
          <TokenInput token={jwtData.token} setToken={handleTokenChange} />
        </div>
        <div className="flex-1 p-4 border rounded-lg bg-gray-50">
          <h2 className="text-xl mb-2 font-bold">Decoded</h2>
          <DecodedOutput
            header={decodedHeader}
            payload={decodedPayload}
            setHeader={handleHeaderChange}
            setPayload={handlePayloadChange}
            algorithm={jwtData.algorithm}
            currentKey={algorithmKeys}
          />
        </div>
      </div>
    </div>
  );
};

export default JWTDecoder;