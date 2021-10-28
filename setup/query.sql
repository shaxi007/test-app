select c2.categorie_name,c.categorie_name ,p.product_name
from categories as c
inner join categorie_categories as cc on cc.categorie_id = c.categorie_id 
inner join categories c2 on c2.categorie_id = 5
inner join categories_products cp on cp.categorie_id = 5
inner join products p on p.product_id = cp.product_id 

;

select c.categorie_name , array_agg(c2.categorie_name) 
from categories c 
left join categorie_categories cc on cc.ct_id = c.categorie_id 
left join categories c2 on c2.categorie_id = cc.categorie_id 
where 
	case
		when 1>0 then c.categorie_id = 6
		else true 
	end 
group by c.categorie_name 