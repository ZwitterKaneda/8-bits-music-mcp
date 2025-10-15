import { createInstrument } from './instruments/index.js';

async function simpleTest() {
  console.log('Testing simple instrument creation...');
  
  try {
    const instrument = createInstrument({
      type: 'square',
      volume: -10
    });
    console.log('✓ Square instrument created successfully');
    
    console.log('✓ Simple test passed');
    
  } catch (error) {
    console.error('✗ Simple test failed:', error);
  }
}

simpleTest().catch(console.error);