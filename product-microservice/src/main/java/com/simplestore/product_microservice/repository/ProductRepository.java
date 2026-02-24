import org.springframework.data.jpa.repository.JPARepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ProductRepository extends JPARepository<Product,Long>{
    Product findByName(String name);
    // More complex queries here
}