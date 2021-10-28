const start_queries = {
	sl_cat: `select * from category where category_status`,
	sl_cat_arr: `select array_agg(category_name) from category where category_status`,
};

export default start_queries;
