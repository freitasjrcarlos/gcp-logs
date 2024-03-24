# GCP Logs

:construction: This package is currently under development :construction:

This package is designed to be used with Nest.js. It provides a standard for logging in accordance with Google Cloud Platform's (GCP) logging system. The package utilizes the Winston logging library to facilitate the creation and management of logs. This makes it easier to maintain consistent, high-quality logs across your application, aiding in debugging and monitoring.

To use this package in a Nest.js application, you will need to integrate it into your Nest.js services. This can be done by importing the package and using it as a provider in your Nest.js modules.

Please note that this package is specifically tailored for use with GCP and may not be suitable for other cloud platforms or logging systems.

## Integration into Nest.js Services

To integrate the GCP Logs package into your Nest.js application, follow these steps:

### Step 1: Install the Package

First, you need to install the GCP Logs package into your project. Run the following command in your project directory:

```bash
npm install gcp-logs
```

or if you use yarn:

```bash
yarn add gcp-logs
```

### Step 2: Configure your Main file

```bash
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configureLogger } from 'gcp-logs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug'],
  });

  configureLogger(app);

  // Your configs...
}
bootstrap();
```

### Step 3: Configure your App module

After installing the package, you need to import the LoggingModule provided by gcp-logs into your AppModule. The LoggingModule encapsulates the Winston logging configuration tailored for use with GCP. Here's an example of how to do it:

```bash
import { Module } from '@nestjs/common';
import { LoggingModule } from 'gcp-logs'; // Import the LoggingModule from gcp-logs
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    LoggingModule, // Add LoggingModule to your AppModule imports
    // other modules...
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```
