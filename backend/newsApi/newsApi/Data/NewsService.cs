﻿using System;
using System.Collections.Generic;
using System.Linq;
using MongoDB.Driver;
using newsApi.Models;

namespace newsApi.Data
{
    public class NewsService : INewsService
    {
        private readonly IMongoCollection<News> _newsList;

        public NewsService(INewsDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _newsList = database.GetCollection<News>(settings.NewsCollectionName);
        }

        public List<News> Get() =>
            _newsList.Find(news => true).ToList();

        public News Get(Guid id) =>
            _newsList.Find(news => news.Id == id).FirstOrDefault();

        public News Get(string dashCaption)
        {
            var newsList = _newsList.Find(news => true).ToList();
            //TODO haber kaydederken caption arasındaki boşluklar silinerek url element olarak kaydedilecek. Sorgu o url üzerinden yapılacak.
            return newsList.Find(news => news.Caption.Replace(" ", "-").Replace("?",string.Empty).ToLower() == dashCaption);
        }



        public News Create(News news)
        {
            _newsList.InsertOne(news);
            return news;
        }

        public void Update(Guid id, News newsIn) =>
            _newsList.ReplaceOne(news => news.Id == id, newsIn);

        public void Remove(News newsIn) =>
            _newsList.DeleteOne(news => news.Id == newsIn.Id);

        public void Remove(Guid id) =>
            _newsList.DeleteOne(news => news.Id == id);
    }
}
