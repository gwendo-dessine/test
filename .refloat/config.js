import { user } from '@refloat/context'

export const jobs = {
	sample_job: {
		steps: [{
			command: 'echo "hello $user!"',
			env: { user: user.displayName }
		}]
	}
}
