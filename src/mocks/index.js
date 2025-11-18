// src/mocks/index.js

export async function initMocks() {
  if (typeof window === 'undefined') {
    const { server } = await import('./server');
    server.listen({
      onUnhandledRequest: 'bypass'
    });
    console.log("✅ MSW Server Mocking đã được khởi động!");
  } else {
    const { worker } = await import('./browser');
    worker.start({
      onUnhandledRequest: 'bypass',
    });
  }
}

if (process.env.NODE_ENV === 'development') {
  initMocks();
}
