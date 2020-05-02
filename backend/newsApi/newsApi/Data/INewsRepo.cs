using System;
using System.Collections;
using System.Collections.Generic;
using newsApi.Models;

namespace newsApi.Data
{
    public interface INewsRepo
    {
        IEnumerable<News> GetNewsList();
        News GetNewsById(Guid id);
    }
}