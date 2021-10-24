// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import ResourceParser from '../../ogame/parser/resources';
import Test from '../../ogame/test';

type Data = {
  name: string;
};

export default async function resources(req: NextApiRequest, res: NextApiResponse<Data>) {
  const resources = await ResourceParser();

  console.log('Api called');

  console.log(Test.getTest());

  res.status(200).json({ name: 'John Doe' });
}
