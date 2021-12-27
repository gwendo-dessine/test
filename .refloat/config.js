import { user } from '@refloat/context'

export default {
	sample_job: {
		steps: [{
			command: 'echo "hello $user!"',
			env: { user: user.displayName }
		}]
	}
}
