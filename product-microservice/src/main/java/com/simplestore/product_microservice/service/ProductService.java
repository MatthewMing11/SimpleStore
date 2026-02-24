import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService{
    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository){
        this.productRepository=productRepository;
    }

    public Product createProduct(int amount, String name, float price){
        Product product = Product(amount,name,price);
        return productRepository.save(product);
    }
    public Product findByName(String name){
        return productRepository.findByName(name);
    }
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }
}