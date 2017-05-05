/// <reference types="express" />
import { Request, Response, NextFunction } from 'express';
export default function corsMiddleware(req: Request, res: Response, next: NextFunction): any;
