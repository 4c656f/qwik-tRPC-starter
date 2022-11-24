import { z } from 'zod';
import { t } from '../trpc';

export const frameworkRouter = t.router({
	list: t.procedure.input(z.string()).query(
		async () => {
			return 'this is trpcRoute'
		}
	),
});
