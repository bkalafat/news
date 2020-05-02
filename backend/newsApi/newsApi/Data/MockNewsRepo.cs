using System;
using System.Collections.Generic;
using newsApi.Models;

namespace newsApi.Data
{
    public class MockNewsRepo : INewsRepo
    {
        public IEnumerable<News> GetNewsList()
        {
            return new List<News>
            {
                new News
                {
                    Id = Guid.NewGuid(),
                    Category = "Covid",
                    Type = "news",
                    Caption = "Korona vaka sayısı",
                    Summary = "Türkiyede vaka sayısı azalıyor.",
                    ImgPath = "https://via.placeholder.com/600x300?text=KORONA",
                    ImgAlt = "test haber img",
                    Content =
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at nisi ex. Nullam et elit elementum, consequat risus ut, aliquet metus. Phasellus pharetra, urna non mollis auctor, dui erat fermentum lorem, sed egestas sem nisl ut augue. Duis vitae turpis non dui luctus congue. Donec iaculis, diam in consequat dapibus, tortor mauris rhoncus ex, sit amet rutrum augue arcu a lacus. Vestibulum porta, orci vitae ultrices blandit, dolor metus tristique lorem,eget placerat nisl nulla in turpis. Maecenas vel aliquam leo. Vivamus eleifend sapien vel mauris mollis imperdiet.",
                    Subjects = new[] {"Covid", "Türkiye"},
                    Authors = new[] {"Mustafa Çolakoğlu", "Burak Kalafat"},
                    CreatedDate = DateTime.Parse("2020-04-23T18:25:43.511Z"),
                    UpdateDate = DateTime.Parse("2020-05-01T14:35:43.511Z"),
                    ExpressDate = DateTime.Parse("2020-05-01T14:35:43.511Z"),
                    Priority = 1,
                    IsActive = true,
                },
                new News
                {
                    Id = Guid.NewGuid(),
                    Category = "Libya",
                    Type = "news",
                    Caption = "Libya'da Hafter milislerine ikmal yapan yakıt tankeri ile iki askeri araç vuruldu",
                    Summary = "Libya karışık aga",
                    ImgPath = "https://via.placeholder.com/600x300?text=KORONA",
                    ImgAlt = "test haber img",
                    Content =
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at nisi ex. Nullam et elit elementum, consequat risus ut, aliquet metus. Phasellus pharetra, urna non mollis auctor, dui erat fermentum lorem, sed egestas sem nisl ut augue. Duis vitae turpis non dui luctus congue. Donec iaculis, diam in consequat dapibus, tortor mauris rhoncus ex, sit amet rutrum augue arcu a lacus. Vestibulum porta, orci vitae ultrices blandit, dolor metus tristique lorem,eget placerat nisl nulla in turpis. Maecenas vel aliquam leo. Vivamus eleifend sapien vel mauris mollis imperdiet.",
                    Subjects = new[] {"Covid", "Türkiye"},
                    Authors = new[] {"Mustafa Çolakoğlu", "Burak Kalafat"},
                    CreatedDate = DateTime.Parse("2020-04-23T18:25:43.511Z"),
                    UpdateDate = DateTime.Parse("2020-05-01T14:35:43.511Z"),
                    ExpressDate = DateTime.Parse("2020-05-01T14:35:43.511Z"),
                    Priority = 1,
                    IsActive = true,
                },
                new News
                {
                    Id = Guid.NewGuid(),
                    Category = "Covid",
                    Type = "news",
                    Caption = "Korona vaka sayısı",
                    Summary = "Türkiyede vaka sayısı azalıyor.",
                    ImgPath = "https://via.placeholder.com/600x300?text=KORONA",
                    ImgAlt = "test haber img",
                    Content =
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at nisi ex. Nullam et elit elementum, consequat risus ut, aliquet metus. Phasellus pharetra, urna non mollis auctor, dui erat fermentum lorem, sed egestas sem nisl ut augue. Duis vitae turpis non dui luctus congue. Donec iaculis, diam in consequat dapibus, tortor mauris rhoncus ex, sit amet rutrum augue arcu a lacus. Vestibulum porta, orci vitae ultrices blandit, dolor metus tristique lorem,eget placerat nisl nulla in turpis. Maecenas vel aliquam leo. Vivamus eleifend sapien vel mauris mollis imperdiet.",
                    Subjects = new[] {"Covid", "Türkiye"},
                    Authors = new[] {"Mustafa Çolakoğlu", "Burak Kalafat"},
                    CreatedDate = DateTime.Parse("2020-04-23T18:25:43.511Z"),
                    UpdateDate = DateTime.Parse("2020-05-01T14:35:43.511Z"),
                    ExpressDate = DateTime.Parse("2020-05-01T14:35:43.511Z"),
                    Priority = 1,
                    IsActive = true,
                }
            };
        }

        public News GetNewsById(Guid id)
        {
            return new News
            {
                Id = Guid.NewGuid(),
                Category = "Covid",
                Type = "news",
                Caption = "Korona vaka sayısı",
                Summary = "Türkiyede vaka sayısı azalıyor.",
                ImgPath = "https://via.placeholder.com/600x300?text=KORONA",
                ImgAlt = "test haber img",
                Content =
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at nisi ex. Nullam et elit elementum, consequat risus ut, aliquet metus. Phasellus pharetra, urna non mollis auctor, dui erat fermentum lorem, sed egestas sem nisl ut augue. Duis vitae turpis non dui luctus congue. Donec iaculis, diam in consequat dapibus, tortor mauris rhoncus ex, sit amet rutrum augue arcu a lacus. Vestibulum porta, orci vitae ultrices blandit, dolor metus tristique lorem,eget placerat nisl nulla in turpis. Maecenas vel aliquam leo. Vivamus eleifend sapien vel mauris mollis imperdiet.",
                Subjects = new[] {"Covid", "Türkiye"},
                Authors = new[] {"Mustafa Çolakoğlu", "Burak Kalafat"},
                CreatedDate = DateTime.Parse("2020-04-23T18:25:43.511Z"),
                UpdateDate = DateTime.Parse("2020-05-01T14:35:43.511Z"),
                ExpressDate = DateTime.Parse("2020-05-01T14:35:43.511Z"),
                Priority = 1,
                IsActive = true,
            };
        }
    }
}
