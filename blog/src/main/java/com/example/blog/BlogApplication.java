package com.example.blog;

import com.example.blog.entities.Users;
import com.example.blog.repositories.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BlogApplication {


	private static final Logger log = LoggerFactory.getLogger(BlogApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(BlogApplication.class, args);

	}
	@Bean
	public CommandLineRunner demo(UserRepository repository) {
		return (args) -> {
			// save a couple of customers
//			repository.save(new Users("Jack", "Bauer", "asdf"));
//			repository.save(new Users("Chloe", "O'Brian", "asdf"));
//			repository.save(new Users("Kim", "Bauer", "asdf"));
//			repository.save(new Users("David", "Palmer", "asdf"));
//			repository.save(new Users("Michelle", "Dessler", "asdf"));

			// fetch all customers
			log.info("Customers found with findAll():");
			log.info("-------------------------------");
			for (Users user : repository.findAll()) {
				log.info(user.toString());
			}
			log.info("");

			// fetch an individual customer by ID
			repository.findById(1)
					.ifPresent(customer -> {
						log.info("Customer found with findById(1L):");
						log.info("--------------------------------");
						log.info(customer.toString());
						log.info("");
					});
		};
	}


}
