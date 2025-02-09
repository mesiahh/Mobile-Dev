using System;
using System.Collections.Generic;

class Program
{
    static List<string> deck = new List<string>();
    static Random random = new Random();

    static void Main()
    {
        while (true)
        {
            Console.WriteLine("\nMenu:");
            Console.WriteLine("1. Create a Deck");
            Console.WriteLine("2. Shuffle Deck");
            Console.WriteLine("3. Deal Cards");
            Console.WriteLine("4. Display Deck");
            Console.WriteLine("5. Exit");
            Console.Write("Choose an option: ");
            string choice = Console.ReadLine();

            switch (choice)
            {
                case "1":
                    CreateDeck();
                    break;
                case "2":
                    ShuffleDeck();
                    break;
                case "3":
                    DealCards();
                    break;
                case "4":
                    DisplayDeck();
                    break;
                case "5":
                    return;
                default:
                    Console.WriteLine("Invalid choice. Please select a valid option.");
                    break;
            }
        }
    }

    static void CreateDeck()
    {
        string[] suits = { "Cloves", "Diamond", "Heart", "Spade" };
        string[] ranks = { "Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King" };
        deck.Clear();
        foreach (string suit in suits)
        {
            foreach (string rank in ranks)
            {
                deck.Add($"Suit: {suit}; Rank: {rank}");
            }
        }
        Console.WriteLine("Deck created successfully.");
    }

    static void ShuffleDeck()
    {
        if (deck.Count == 0)
        {
            Console.WriteLine("Cannot shuffle. The deck is empty.");
            return;
        }

        for (int i = deck.Count - 1; i > 0; i--)
        {
            int j = random.Next(i + 1);
            string temp = deck[i];
            deck[i] = deck[j];
            deck[j] = temp;
        }
        Console.WriteLine("Deck shuffled successfully.");
    }

    static void DealCards()
    {
        if (deck.Count == 0)
        {
            Console.WriteLine("Cannot deal. The deck is empty.");
            return;
        }

        Console.Write("Enter the number of cards to deal: ");
        if (!int.TryParse(Console.ReadLine(), out int numCards) || numCards <= 0)
        {
            Console.WriteLine("Invalid input. Please enter a positive number.");
            return;
        }

        if (numCards > deck.Count)
        {
            Console.WriteLine($"Not enough cards in the deck. Only {deck.Count} remaining. Returning to menu.");
            return;
        }

        Console.WriteLine("Dealt cards:");
        for (int i = 0; i < numCards; i++)
        {
            Console.WriteLine(deck[0]);
            deck.RemoveAt(0);
        }
    }

    static void DisplayDeck()
    {
        if (deck.Count == 0)
        {
            Console.WriteLine("The deck is empty.");
            return;
        }

        Console.WriteLine("Deck contains:");
        foreach (var card in deck)
        {
            Console.WriteLine(card);
        }
        Console.WriteLine($"Total cards remaining: {deck.Count}");
    }
}
