#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { HelloWorldCdkStack } from '../lib/hello_world_cdk-stack';

const app = new cdk.App();
new HelloWorldCdkStack(app, 'HelloWorldCdkStack');
