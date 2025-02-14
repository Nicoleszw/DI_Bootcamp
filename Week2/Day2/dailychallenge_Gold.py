import random

class Gene:
    def __init__(self, value=None):
        self.value = random.choice([0, 1]) if value is None else value
    
    def mutate(self):
        """Flip the gene's value."""
        self.value = 1 if self.value == 0 else 0
    
    def __repr__(self):
        return str(self.value)

class Chromosome:
    def __init__(self):
        self.genes = [Gene() for _ in range(10)]
    
    def mutate(self):
        """Each gene has a 50% chance to flip."""
        for gene in self.genes:
            if random.random() < 0.5:
                gene.mutate()
    
    def is_all_ones(self):
        return all(gene.value == 1 for gene in self.genes)
    
    def __repr__(self):
        return "".join(map(str, self.genes))

class DNA:
    def __init__(self):
        self.chromosomes = [Chromosome() for _ in range(10)]
    
    def mutate(self):
        """Each chromosome has a 50% chance to mutate."""
        for chromosome in self.chromosomes:
            if random.random() < 0.5:
                chromosome.mutate()
    
    def is_all_ones(self):
        return all(chromosome.is_all_ones() for chromosome in self.chromosomes)
    
    def __repr__(self):
        return "\n".join(map(str, self.chromosomes))

class Organism:
    def __init__(self, dna, environment):
        self.dna = dna
        self.environment = environment  
    
    def mutate(self):
        """Mutates based on environmental probability."""
        if random.random() < self.environment:
            self.dna.mutate()
    
    def is_perfect(self):
        return self.dna.is_all_ones()

def simulate_evolution():
    generations = 0
    organism = Organism(DNA(), environment=0.8)  
    
    while not organism.is_perfect():
        organism.mutate()
        generations += 1
    
    print(f"Evolution complete! It took {generations} generations to reach perfect DNA.")

if __name__ == "__main__":
    simulate_evolution()