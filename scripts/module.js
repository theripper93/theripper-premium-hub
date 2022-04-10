class TheRipperPremiumHUB{
    static async fetchData() {
        return await fetch(
          `https://theripper93.com/moduleListing.json`
        )
          .then((response) => response.json())
          .then((data) => data);
      }
}