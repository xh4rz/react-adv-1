import {
	ProductCard,
	ProductImage,
	ProductTitle,
	ProductButtons
} from '../components';
import { Product } from '../interfaces/interfaces';
import '../styles/custom-styles.css';

const product1 = {
	id: '1',
	title: 'Coffee Mug - Card',
	img: './coffee-mug.png'
};

const product2 = {
	id: '2',
	title: 'Coffee Mug - Meme',
	img: './coffee-mug2.png'
};

const products: Product[] = [product1, product2];

export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />
			<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
				{products.map((product) => (
					<ProductCard
						product={product}
						className="bg-dark text-white"
						key={product.id}
					>
						<ProductImage
							className="custom-image"
							style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
						/>
						<ProductTitle className="text-bold" />
						<ProductButtons className="custom-buttons" />
					</ProductCard>
				))}
			</div>

			<div className="shopping-cart">
				<ProductCard
					product={product2}
					className="bg-dark text-white"
					style={{ width: '100px' }}
				>
					<ProductImage
						className="custom-image"
						style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
					/>
					<ProductButtons className="custom-buttons" />
				</ProductCard>
				<ProductCard
					product={product1}
					className="bg-dark text-white"
					style={{ width: '100px' }}
				>
					<ProductImage
						className="custom-image"
						style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
					/>
					<ProductButtons className="custom-buttons" />
				</ProductCard>
			</div>
		</div>
	);
};
