import {
  FastifyInstance,
  FastifyLoggerInstance,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import { IncomingMessage, Server, ServerResponse } from "http";

type app = FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse,
  FastifyLoggerInstance
>;

type opts = FastifyPluginOptions;

type done = (err?: Error | undefined) => void;

export type FastifyRoute = (app: app, opts: opts, done: done) => void;

export type FastifyController = (
  req: FastifyRequest,
  reply: FastifyReply
) => void;
