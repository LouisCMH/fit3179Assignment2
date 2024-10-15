import geopandas as gpd

# Load the shapefile
gdf = gpd.read_file('shp/mys_admbnda_adm1_unhcr_20210211.shp')

# Calculate centroids
gdf['centroid'] = gdf.centroid

centroids_df = gdf[['ADM1_EN', 'centroid']]

centroids_df['Longitude'] = centroids_df['centroid'].apply(lambda p: p.x)
centroids_df['Latitude'] = centroids_df['centroid'].apply(lambda p: p.y)

centroids_df = centroids_df.drop(columns='centroid')

# Export centroids to CSV with geometry
centroids_df.to_csv('centroids_state.csv', index=False)
