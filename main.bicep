resource storage 'Microsoft.Storage/storageAccounts@2022-09-01' = {
  name: 'rentacarstorage'
  location: resourceGroup().location
  kind: 'StorageV2'
  sku: {
    name: 'Standard_LRS'
  }
}