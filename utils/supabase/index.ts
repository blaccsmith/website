import {
	createClient,
	PostgrestResponse,
	SupabaseClient,
} from '@supabase/supabase-js';

export default class Supabase {
	client: SupabaseClient;

	constructor() {
		const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
		const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

		this.client = createClient(
			supabaseUrl as string,
			supabaseAnonKey as string
		);
	}

	async insert(table: string, data: any) {
		const { error }: PostgrestResponse<any> = await this.client
			.from(table)
			.insert([data]);

		return { error };
	}

	async getAll(table: string) {
		const { error, data }: PostgrestResponse<any> = await this.client
			.from(table)
			.select('*');

		return { error, data };
	}
}
