import { File } from 'web3.storage';
import { getAuthToken } from 'web3.storage/auth';

async function saveText() {
  try {
    const apiKey = 'YOUR_WEB3STORAGE_API_KEY'; // Reemplaza con tu propia clave de API de web3.storage
    const auth = await getAuthToken(apiKey);
    
    const text = 'Hola';
    const file = new File([text], 'hello.txt', { type: 'text/plain' });

    const response = await fetch('https://api.web3.storage/upload', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${auth}`,
      },
      body: file.stream(),
    });

    if (response.ok) {
      const { cid } = await response.json();
      console.log('File added to web3.storage. CID:', cid);
    } else {
      console.error('Error uploading file to web3.storage:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

saveText();
