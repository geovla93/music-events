import type { NextApiRequest, NextApiResponse, PageConfig } from 'next';
import formidable, { File } from 'formidable';
import { uploadImage } from '@/lib/cloudinary';
import { withSessionRoute } from '@/lib/iron-session';

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

type ProcessedFile = [string, File];

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const user = req.session.user;
    if (!user) {
      res.status(401).json({ message: 'Not authenticated' });
      return;
    }

    let status = 200;
    let responseJson = {
      status: 'ok',
      message: 'Files were uploaded successfully',
    };

    // Get files using formidable
    const file = await new Promise<ProcessedFile | undefined>(
      (resolve, reject) => {
        const form = new formidable.IncomingForm();
        let imageFile: ProcessedFile;
        form.on('file', function (field, file) {
          imageFile = [field, file];
        });
        form.on('end', () => resolve(imageFile));
        form.on('error', (err) => reject(err));
        form.parse(req);
      },
    ).catch((err) => {
      console.log(err);
      status = 500;
      responseJson.status = 'fail';
      responseJson.message = 'Upload error';
    });

    if (!file) {
      status = 500;
      responseJson.status = 'fail';
      responseJson.message = 'Upload error';

      res.status(status).json(responseJson);
      return;
    }

    const result = await uploadImage(file[1]);

    res.status(status).json({ ...responseJson, data: result });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}

export default withSessionRoute(handler);
