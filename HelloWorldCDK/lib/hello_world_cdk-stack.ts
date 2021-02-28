import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export class HelloWorldCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambda.DockerImageFunction(this, 'DockerLambda', {
      code: lambda.DockerImageCode.fromImageAsset('../HelloWorldLambdaHandler')
    })
  }
}
